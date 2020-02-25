const express = require('express');
const nodemailer = require('nodemailer');
const app = express()

const port = 3000;

const user = "seuusuario"
const pass = "suasenha"

app.get('/', (req, res) => res.send('Aplicação está rodando'));

app.get('/send',(req, res) =>{
    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: { user ,pass }
      });

      transporter.sendMail({
        from: 'Seu Nome <seuemail@email.com>',
        to: 'Nome do Destinatário <emaildodestinatario@email.com>',
        subject: 'Assunto do Email',
	    text: 'Conteúdo do email em texto',
      }).then(info => {
          res.send(info)
      }).catch(error => {
          res.send(error)
      })
})

app.listen(port, () => console.log(`Running on port ${port}!`));