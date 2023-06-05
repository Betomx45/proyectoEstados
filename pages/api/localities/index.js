import db from "database/models/"

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return localidadesList(req, res);
        case 'POST':
            return addLocalidades(req, res);
        case 'PUT':
            return editLocalidades(req, res);
        case 'DELETE':
            return deleteLocalidades(req, res);

        default:
            res.status(400).json({ error: true, message: 'Petición errónea' });
    }
}

//POST: /localidades
const addLocalidades = async (req, res) => {
    try {
        //los datos que vienen en el req.body
        //console.log(req.body);

        //guardar los datos de la localidad
        const localidad = await db.Localities.create({ ...req.body });

        res.json({
            localidad,
            message: 'Se registro la localidad'
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

// GET: /Localidades
const localidadesList = async (req, res) => {

    try {

        //leer la localidad a mostrar
        const { cityId } = req.query;

        //Leer los minicipios
        let localidades = [];

        if (cityId) {
            localidades = await db.Localities.findAll({
                where: {
                    cityId,
                },
            });
        } else {
            localidades = await db.Localities.findAll({
                include: ['towns'],
            });
        }

        return res.json(localidades)

    } catch (error) {
        return res.status(400).json(
            {
                error: true,
                message: `Ocurrio un error al procesar la petición ${error.message}`
            }
        )
    }
}

//PUT: /Localidades
const editLocalidades = async (req, res) => {
    try {
        //eliminar los datos de la unidad
        const { id } = req.query;

        //let unids = await db.Unidades.create({...req.body});
        await db.Localities.update({ ...req.body },
            {
                where: {
                    id
                }
            }
        )

        //await db.Unidades.save();
        res.json({
            message: 'Se actualizo la localidad'
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

//DELETE: /Localidades
const deleteLocalidades = async (req, res) => {
    try {
        //eliminar los datos de la unidad
        const { id } = req.query;
        await db.Localities.destroy({
            where: {
                id: id
            }
        });

        res.json({
            message: 'Fue eliminada correctamente la localidad.'
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