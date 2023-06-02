import db from "database/models/"

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return unidadesList(req, res);
        case 'POST':
            return addUnidades(req, res);
        case 'PUT':
            return editUnidades(req, res);
        case 'DELETE':
            return deleteUnidades(req, res);

        default:
            res.status(400).json({ error: true, message: 'Petición errónea' });
    }
}

//POST: /unidades
const addUnidades = async (req, res) => {
        try {
        //los datos que vienen en el req.body
        //console.log(req.body);

        //guardar los datos del cliente
        const unid = await db.Unidades.create({ ...req.body });

        res.json({
            unid,
            message: 'La unidad fue registrada correctamente.'
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

// GET: /unidades

/*const unidadesList = async (req, res) => {
    try {
        const unid = await db.Unidades.findAll({});

        return res.json(unid);
    } catch (error) {
        return res.status(400).json(
            {
                error: true,
                message: `Ocurrió un error al procesar la petición: ${error.message}`
            }
        )
    }
}*/

const unidadesList = async (req, res) => {

    try {

        //leer la ruta a mostrar
        const { rutaId } = req.query;

        //Leer los productos
        let unidads = [];

        if (rutaId) {
            unidads = await db.Unidades.findAll({
                where: {
                    rutaId,
                },
                include: ['ruta'],
            });
        } else {
            unidads = await db.Unidades.findAll({
                include: ['ruta'],
            });
        }

        return res.json(unidads)

    } catch (error) {
        return res.status(400).json(
            {
                error: true,
                message: `Ocurrio un error al procesar la petición ${error.message}`
            }
        )
    }
}

//PUT: /unidades
const editUnidades = async (req, res) => {
    try {
        //eliminar los datos de la unidad
        const { id } = req.query;

        //let unids = await db.Unidades.create({...req.body});
        await db.Unidades.update({ ...req.body },
            {
                where: {
                    id
                }
            }
        )

        //await db.Unidades.save();
        res.json({
            message: 'La unidad fue actualizada correctamente.'
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

//DELETE: /Unidades
const deleteUnidades = async (req, res) => {
    try {
        //eliminar los datos de la unidad
        const { id } = req.query;
        await db.Unidades.destroy({
            where: {
                id: id
            }
        });

        res.json({
            message: 'La unidad fue eliminada correctamente.'
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