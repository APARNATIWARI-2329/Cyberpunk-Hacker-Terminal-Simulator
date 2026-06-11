// MATRIX EFFECT

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@$#%&*";

const fontSize = 14;

const columns =
canvas.width / fontSize;

const drops = [];

for(let i=0;i<columns;i++){
    drops[i] = 1;
}

function drawMatrix(){

    ctx.fillStyle =
    "rgba(0,0,0,0.05)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle = "#00ff00";

    ctx.font =
    fontSize + "px monospace";

    for(let i=0;i<drops.length;i++){

        const text =
        chars[Math.floor(
            Math.random()*chars.length
        )];

        ctx.fillText(
            text,
            i*fontSize,
            drops[i]*fontSize
        );

        if(
        drops[i]*fontSize >
        canvas.height &&
        Math.random() > 0.975
        ){
            drops[i]=0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix,33);


// TERMINAL

const output =
document.getElementById("output");

function randomIP(){

return `${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`;

}

function randomDelay(){

return new Promise(resolve=>{

let delay =
Math.random()*2000+1000;

setTimeout(resolve,delay);

});
}

async function addLine(text){

await randomDelay();

const div =
document.createElement("div");

div.classList.add("line");

div.innerHTML =
"> " + text;

output.appendChild(div);

output.scrollTop =
output.scrollHeight;
}

async function startSimulation(){

await addLine("Initializing Hacking...");
await addLine("Connecting To Remote Server...");
await addLine(`Target IP Found : ${randomIP()}`);
await addLine("Reading Your Files...");
await addLine("Password Files Detected...");
await addLine("Bypassing Firewall...");
await addLine("Uploading Data To Server...");
await addLine("Deleting System Logs...");

await addLine(
"<span class='danger'>SECURITY BREACH DETECTED</span>"
);

await addLine(
"<span class='danger'>ACCESS GRANTED</span>"
);

await addLine(
"<span class='success'>Operation Completed Successfully</span>"
);

}

startSimulation();