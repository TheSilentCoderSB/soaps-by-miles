function SendMail(){
    var params = {
        from_name: document.getElementById("firstname").value,
        last_name: document.getElementById("lastname").value,
        element: document.getElementById("element").value,
        lock: document.getElementById("lock").value,
        soaps: document.getElementById("soaps").value,
        scents: document.getElementById("scents").value,
        custom: document.getElementById("custom").value,
        email: document.getElementById("email").value,
    }
    emailjs.send("service_551uls6", "template_jepgz26", params).then(function(){
        alert("Success! Sent Miles, The Soaper, He Will Reply Back Soon.")
    })
}