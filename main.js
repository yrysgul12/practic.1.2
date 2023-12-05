// https://api.telegram.org/bot6932349235:AAGLGDStWyKK8pAoM0VVHe5WcFUtT-xkkO4/getUpdates


let token="6932349235:AAGLGDStWyKK8pAoM0VVHe5WcFUtT-xkkO4"
let chat_id="484343069"
let url_api=`https://api.telegram.org/bot${token}/sendMessage`
let success=document.getElementById("success")

document.getElementById("tg").addEventListener("submit",function(e){
e.preventDefault()
let message=`<b>Заявка с сайта</b>\n`
message+=`<b>Отправитель:</b> ${this.name.value}\n`
message+=`<b>Номер:</b> ${this.number.value}\n`
message+=`<b>Почта:</b> ${this.email.value}\n`
console.log(message)
axios.post(url_api,{
    chat_id:chat_id,
    parse_mode:"html",
    text:message
}).then((res)=>{
    this.name.value=""
    this.number.value=""
    this.email.value=""
    success.innerHTML="Сообщение отправлено"
    success.style.display="block"
}).catch((err)=>{
    console.log(err);
}).finally(()=>console.log("successfully"))
})

// let token="6932349235:AAGLGDStWyKK8pAoM0VVHe5WcFUtT-xkkO4"
// let chat_id="484343069"
// let url_api=`https://api.telegram.org/bot${token}/sendDocument`
// let success=document.getElementById("success")

// document.getElementById("tg").addEventListener("submit",function(e){
//     e.preventDefault()
// console.log(this.document.files[0])
// let formData = new FormData();
// formData.append("document",this.document.files[0])

// axios.post(url_api,{formData }).then((res)=>{
//        this.file.value=""
//         success.innerHTML="Сообщение отправлено"
//        success.style.display="block"
//      }).catch((err)=>{
//       console.log(err);
//      }).finally(()=>console.log("successfully"))
// })
     