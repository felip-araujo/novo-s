const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { nome, email, mensagem } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // false para TLS
      auth: {
        user: "seuemail@gmail.com", // Seu e-mail
        pass: "suasenha", // Sua senha ou app password
      },
    });

    await transporter.sendMail({
      from: `"Contato do Site" <seuemail@gmail.com>`, // Remetente
      to: "destinatario@gmail.com", // Destinatário
      subject: "Mensagem do Formulário", // Assunto
      text: `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`,
    });

    return res.status(200).json({ success: true, message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return res.status(500).json({ success: false, message: "Erro ao enviar e-mail." });
  }
}
