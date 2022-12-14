const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const cors = require("cors")
require("dotenv").config();

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cors())
app.use(bodyParser.json())




app.get('/', (req,res)=>{
    const user = {
        username:"Deakin",
        password:"123"
    }
    res.send(user)
})

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendMail = async(msg) => {
    try{
        await sgMail.send(msg)
        console.log("message sent successfully!")
    } catch (error) {
        console.error(error);

        if (error.response) {
            console.error(error.response.body)
        }
    }
}

app.post('/' , (req,res)=>{
    const password = req.body.password
    const username = req.body.username
    const data = {
            email_address : username,
            password : password
        }

          console.log(data)
          sendMail({
            to: email_address,
            from: "momiib2@gmail.com",
            subject: "Welcome to Deakin University Weekly Newsletter",
            Text: "Dear Students We are delighted to welcome you to Deakin University and excited by the return of our vibrant campus life! Whether you are beginning or continuing your educational journey with us we look forward to learning exploring, and growing together Throughout the pandemic, you have faced challenges and been called on to sacrifice significant rites of passage for the greater good of public health. During this time, we have appreciated your ability to adapt to an ever-evolving situation, and to find opportunities for growth amid the many changes. The 2021-22 academic year still holds some unknowns for us in light of the ongoing pandemic, and we will all have to remain understanding and flexible amid a fluid situation. Despite the unique circumstances, we are thrilled to have you with us on campus and in the classroom. At Deakin, you are part of a strong campus community that values academic excellence and diversity. We are ranked No. 17 overall among the top public universities in the country by Australian News and World Report. We are also ranked No. 238 worldwide for producing Nobel laureates in this century, according to Times Higher Education in London Paramount to the academic achievement and excellence at Deakin is our commitment to diversity, equity, and inclusion. We are a Minority-Serving Institution, and the first member of the prestigious Association of Australian universities to be recognised as a Hispanic-Serving Institution. Newsweek ranks us the No. 1 Hispanic-Serving Institution in the country As a university dedicated to educating our future contributors and leaders, and learning from each other, we encourage one another to foster a community free of intolerance and discrimination, and to promote a campus climate that is respectful, civil, supportive, and safe. These core values allow us to provide a learning environment where we can all pursue our dreams and reach our highest potential",
        })

})

app.listen(8003, function(){
console.log("Server is running on port 8003")
})

