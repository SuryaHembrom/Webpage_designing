
function formSubmit(){
    const name= document.querySelector("#name").value;
    const surname= document.querySelector("#surname").value;
    const mobile= document.querySelector("#mobile").value;
    const people= document.querySelector("#people").value;
    const date= document.querySelector("#date").value;
    const turn= document.querySelector("#turn").value;
    const message= document.querySelector("#message").value;

    console.log(name,surname,mobile, people, date, turn, message);

    $.ajax({
        url: "https://cieffe-web-backend.vercel.app/api/ombra/reservations",
        type: "POST", 
        data: {
            name: name,
            surname: surname, 
            mobile: mobile,
            people: people,
            date: date, 
            turn: turn,
            message: message
        },
        success: function (result){
            console.log("result", result); 

            loading.classList.add("d-none")
            success.classList.remove("d-none")
            error.classList.add("d-none")

            setTimeout( () => {
                success.classList.add("d-none")
            }, 1000);
            
        },
        error: function (error){
            console.log("not found", error); 

            loading.classList.add("d-none")
            success.classList.add("d-none")
            error.classList.remove("d-none")

            setTimeout( () => {
                error.classList.add("d-none")
            }, 1000);

        }
        
    });
}