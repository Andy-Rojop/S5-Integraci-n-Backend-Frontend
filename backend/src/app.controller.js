const { Router } = require('express');
const { AppService } = require('./app.service');

const router = Router();

router.get('/', (req, res) => {
    res.send('API de formulario funcionando. Usa POST /form para enviar datos.');
});

router.post('/form', async (req, res) => {
    const { nombre, email, message } = req.body;
    if (!nombre || !email) {
        return res.status(400).json({ error: "❌ Nombre y email son requeridos" });
    }
    try {
        const result = await AppService.saveData({ nombre, email, message });
        res.json({ message: "✅ Datos guardados correctamente", data: result });
    } catch (err) {
        res.status(500).json({ error: "Error al guardar en la base de datos" });
    }
});

router.get('/form', async (req, res) => {
    try {
        const data = await AppService.getAll();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Error al obtener los datos" });
    }
});

module.exports = router;