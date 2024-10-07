const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        data: {
            fields: [
                {
                    component: 'inputcomponent',
                    data: {
                        inputLabel: 'Nombre',
                        inputType: 'text',
                        controlName: 'nombre'
                    },
                },
                {
                    component: 'inputcomponent',
                    data: {
                        inputLabel: 'alias',
                        inputType: 'number',
                        controlName: 'alias'
                    },
                },
                {
                    component: 'inputcomponent',
                    data: {
                        inputLabel: 'contraseña',
                        inputType: 'password',
                        controlName: 'password'
                    },
                },
            ]
        },
        code: 200
    })
});

app.get('/section', (req, res) => {
    res.json({
        data: {
            fields: [
                {
                    component: 'InfoLaboralComponent',
                    keyForm: 'infoLaboral',
                    data: {
                    },
                },
                {
                    component: 'InfoFinancieraComponent',
                    keyForm: 'infoFinanciera',
                    data: {
                    },
                },
            ]
        },
        code: 200
    })
})

app.listen(8000, () => {
    console.log('listening')
})