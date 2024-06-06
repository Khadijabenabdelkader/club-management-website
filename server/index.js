const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');

app.use(express.json());
app.use(cors());

app.listen(3002, () => {
    console.log('server is running on port 3002');
});

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'pfadb',
});

app.post('/Inscrire', async (req, res) => {
    const sentEmail = req.body.Email;
    const sentName = req.body.Name;
    const sentPassword = req.body.Password;
    const sentConfirmpassword = req.body.Confirmpassword;

   

    try {
        const hashedPassword = await bcrypt.hash(sentPassword, 10);
        const hashedconfirmPassword = await bcrypt.hash(sentConfirmpassword, 10);
        const SQL = 'INSERT INTO users (email, name, password, confirmpassword) VALUES (?, ?, ?, ?)';
        const Values = [sentEmail, sentName, hashedPassword, hashedconfirmPassword];

        db.query(SQL, Values, (err, results) => {
            if (err) {
                res.status(500).send(err);
            } else {
                console.log('Users inserted successfully!');
                res.send({ message: 'User added!' });
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/Connecter', async (req, res) => {
    const sentLoginName = req.body.LoginName;
    const sentLoginPassword = req.body.LoginPassword;

    const SQL = 'SELECT * FROM users WHERE name = ?';
    const Values = [sentLoginName];

    db.query(SQL, Values, async (err, results) => {
        if (err) {
            res.status(500).send({ Error: err });
        }
        if (results.length > 0) {
            const user = results[0];
            const isMatch = await bcrypt.compare(sentLoginPassword, user.password);
            if (isMatch) {
                res.send(user);
            } else {
                console.log("Credentials don't match!");
                res.send({ message: 'unmatched credentials' });
            }
        } else {
            console.log("Credentials don't match!");
            res.send({ message: 'unmatched credentials' });
        }
    });
});

app.post('/Contact', async(req, res) => {
    const sentNomComplet = req.body.NomComplet;
    const sentTel = req.body.Tel;
    const sentE_mail = req.body.E_mail;
    const sentNomClub = req.body.NomClub;
    const sentObjet = req.body.Objet;

    const SQL = 'INSERT INTO contact (nomcomplet, Tel, e_mail, nomclub, objet) VALUES (?, ?, ?, ?, ?)';
    const Values = [sentNomComplet, sentTel, sentE_mail, sentNomClub, sentObjet];

    db.query(SQL, Values, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            console.log('message received');
            res.send({ message: 'message received' });
        }
    });
});
app.post('/Paiement', async (req, res) => {
    const sentNum = req.body.Num;
    const sentDateValue = req.body.DateValue;
    const sentCode = req.body.Code;
    const sentName = req.body.Name;
    const sentEmail = req.body.Email;
   

    try {
        const hashedCode= await bcrypt.hash(sentCode, 10);
        const SQL = 'INSERT INTO paiement (Num, DateValue, Code, Name, Email) VALUES (?, ?, ?, ?, ?)';
        const Values = [sentNum, sentDateValue, hashedCode, sentName, sentEmail];

        db.query(SQL, Values, (err, results) => {
            if (err) {
                console.error("erreur au niveau de l'insertion:", err);
                res.status(500).send(err);
            } else {
                console.log('Information entered successfully!');
                res.send({ message: 'Information entered successfully!' });
            }
        });
    } catch (error) {
        console.error('erreur :', error);
        res.status(500).send(error);
    }
});
app.post('/Create_club', async(req, res) => {
    const { Nom, Tel, Mail, N_inscrit, NomClub, Objective, Members } = req.body;

    console.log('Received data:', req.body); // Log the received data

    const clubSQL = 'INSERT INTO club (nom, tel, mail, ninscrit, nomclub, objectif) VALUES (?, ?, ?, ?, ?, ?)';
    const clubValues = [Nom, Tel, Mail, N_inscrit, NomClub, Objective];

    db.query(clubSQL, clubValues, (err, results) => {
        if (err) {
            console.error('Error inserting into club:', err);
            return res.status(500).send(err);
        }
        const clubId = results.insertId;
        const memberSQL = 'INSERT INTO membre (nom, poste, tel, mail, idclub) VALUES ?';
        const memberValues = Members.map(member => [member.nom, member.poste, member.tel, member.mail, clubId]);

        console.log('Inserting members:', memberValues); // Log the member values to be inserted

        db.query(memberSQL, [memberValues], (err, memberResults) => {
            if (err) {
                console.error('Error inserting into membre:', err);
                return res.status(500).send(err);
            }
            res.send({ message: 'Club created successfully!' });
        });
    });
});