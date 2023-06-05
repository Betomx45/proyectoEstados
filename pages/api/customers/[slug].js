import db from "@/database/models";
//import customer from "@/database/models/customer";

// responsable de detectar el tipo de request 
// e invocar la funcion adecuada 
export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return clientesList(req, res);
        default:
            res.status(400).json({error: true, message: 'Petición errónea'});
    }
  }

  const clientesList = async (req, res) => {
    try {
       
        const customers = await db.Customers.findOne({
            where: {id: req.query.slug},
            include:[
                {
                    model: db.Adress,
                    as: 'adress',
                    include:[
                        {
                            model: db.Localities,
                            as: 'locality',
                            include:[
                                {
                                    model: db.Town,
                                    as: 'towns',
                                    include:[
                                        {
                                            model: db.States,
                                            as:'states'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }); 

        if(!customers) {
            return res.status(404).json({
                message: 'El cliente no existe',
            });
        }
    
      return res.json({ ...customers.dataValues});
    } catch (error) {
        return res.status(400).json(
            {
                error: true,
                message: `Ocurrió un error al procesar la petición: ${error.message}`
            }
        )
    }
  }