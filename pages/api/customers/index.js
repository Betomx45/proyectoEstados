import db from "database/models/"

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return clientesList(req, res);
        case 'POST':
            return addClientes(req, res);
        case 'PUT':
            return editClientes(req, res);
        case 'DELETE':
            return deleteClientes(req, res);

        default:
            res.status(400).json({ error: true, message: 'Petición errónea' });
    }
}

//POST: /clientes
const addClientes = async (req, res) => {
    try {
        //los datos que vienen en el req.body
        //console.log(req.body);

        //guardar los datos de la clientes
        const cliente = await db.Customers.create({ ...req.body }, { include: 'adress'});

        res.json({
            cliente,
            message: 'Se registro los clientes'
        });
    } catch (error) {
        console.log(error);

        let errors = [];

        if (error.errors) {
            //extraer la información de los campos que tienen error
            errors = error.errors.map((item) => ({
                error: item.message,
                field: item.path,
            }));
        }


        return res.status(400).json(
            {
                error: true,
                message: `Ocurrio un error al procesar la información: ${error.message}`,
                errors,
            }
        )
    }
}

// GET: /clientes
const clientesList = async (req, res) => {

    try {

        const cliente = await db.Customers.findAll({});

        return res.json(cliente)

    } catch (error) {
        return res.status(400).json(
            {
                error: true,
                message: `Ocurrio un error al procesar la petición ${error.message}`
            }
        )
    }
}

//PUT: /clientes
const editClientes = async (req, res) => {
    try {
        //eliminar los datos del cliente
        const { id } = req.query;

        await db.Customers.update({ ...req.body },
            {
                where: {
                    id
                }
            }
        )

        res.json({
            message: 'Se actualizo el cliente'
        });
    } catch (error) {
        console.log(error);
        let errors = [];
        if (error.errors) {
            //extraer la información de los campos que tienen error
            errors = error.errors.map((item) => ({
                error: item.message,
                field: item.path,
            }));
        }
        return res.status(400).json(
            {
                error: true,
                message: `Ocurrio un error al procesar la información: ${error.message}`,
                errors,
            }
        )
    }
}

//DELETE: /clientes
const deleteClientes = async (req, res) => {
    try {
        //eliminar los datos de la unidad
        const { id } = req.query;
        await db.Customers.destroy({
            where: {
                id: id
            }
        });

        res.json({
            message: 'Fue eliminada correctamente el cliente.'
        });
    } catch (error) {
        console.log(error);
        let errors = [];
        if (error.errors) {
            //extraer la información de los campos que tienen error
            errors = error.errors.map((item) => ({
                error: item.message,
                field: item.path,
            }));
        }
        return res.status(400).json(
            {
                error: true,
                message: `Ocurrio un error al procesar la información: ${error.message}`,
                errors,
            }
        )
    }
}