 
 
 
const nodemailer = require('nodemailer');
//const { Script } = require('vm');
 //async..await is not allowed in global scope, must use a wrapper

 const subj = "  Link to Your SoccerScoreboard!";
 const msg = "The link to your SoccerScoreboard is:"
 const name = 'Dave';
 const link = 'https://github.com/FSU-Devs/SoccerScoreboard';
 const address = "rudedude69@msn.com";

 

       /* function textMsg(msg) {
            document.getElementById("msg").innerHTML = msg;
        }*/

 async function sendLink(linked, addr, message) {
    
    /*const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const sms = document.getElementById('sms').value;
    const msg = document.getElementById('msg').value;
    const link = "https://github.com/FSU-Devs/SoccerScoreboard"; */

 
        
    //Creating the transporter
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port:465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: "dhmason15@gmail.com", //my email
            clientId: "888235337339-3ki8l27vkk26a2i176e8rpokpis2s98v.apps.googleusercontent.com", //oauth client id
            clientSecret: "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", //secret
            refreshToken: "1//04-s_Va8G5JZUCgYIARAAGAQSNwF-L9IrAuvYVEj7bjjW9rLgWSX8Hxf8NBMhjTtXeKje3tAyT1dKNT9tsB87O81Kvq-nOKy1dxs", //refresh token
            accessToken: "ya29.a0AeTM1ieN9-ffTCmlAx_DvzgtnMLW3H3wP0thgBQcOu5bbXG6UaXRNLxd9v89oa01ZLckJx7EcR5PH0FbXI39HD8XtKwVZZ2IDcoOntTMGNRArf4ehD104zP5TPgD6qxblpVtu5wVdyFrosQ33oX7SGgl4j7EaCgYKAVkSARMSFQHWtWOmO1cHUGTM8BKSBvqO3WItjg0163" // access token
        },
        //debug: true, //show debug output
        //logger: true // log info in console
    });

    //Send an email
    let info = await transporter.sendMail( {
        from: 'dhmason15@gmail.com',
        to: addr,
        subject: subj,
        //text: link,
        html: `<body> ${message} </body> <br> <a href= ${linked}> SoccerScoreboard</a>`,
    })
    //textMsg(msg);

    console.log("Message sent: %s", info.messageId);

}

sendLink(link, address, msg);