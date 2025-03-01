// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
getInstruction('mashedPotatoes', 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
getInstruction('mashedPotatoes', 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
getInstruction('mashedPotatoes', 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
getInstruction('mashedPotatoes', 0, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
    document.querySelector("#mashedPotatoes").innerHTML += `<li>mashed potatoes are ready!</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
}, (error) => console.log(error));
}, (error) => console.log(error));
}, (error) => console.log(error));
}, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
obtainInstruction('steak', 1)
  .then( (step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
obtainInstruction('steak', 2)
  .then( (step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
obtainInstruction('steak', 3)
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
obtainInstruction('steak', 4)
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
obtainInstruction('steak', 5)
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
obtainInstruction('steak', 6)
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
    document.querySelector("#steakImg").removeAttribute("hidden");
})
})
})
})
})
})
})

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    await obtainInstruction('broccoli', 0)
    .then( (step0) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
  });
  await obtainInstruction('broccoli', 1)
    .then( (step1) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
  });
  await obtainInstruction('broccoli', 2)
    .then( (step2) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
  });
  await obtainInstruction('broccoli', 3)
    .then( (step3) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
  });
  await obtainInstruction('broccoli', 4)
    .then( (step4) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
  });
  await obtainInstruction('broccoli', 5)
    .then( (step5) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
  });
  await obtainInstruction('broccoli', 6)
    .then( (step6) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
      document.querySelector("#broccoli").innerHTML += `<li>broccoli is ready!</li>`;
  });
  document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch(err) {
    console.log(err);
  }
}
makeBroccoli();

// Bonus 2 - Promise all
const brusselS0 = obtainInstruction('brusselsSprouts', 0);
const brusselS1 = obtainInstruction('brusselsSprouts', 1);
const brusselS2 = obtainInstruction('brusselsSprouts', 2);
const brusselS3 = obtainInstruction('brusselsSprouts', 3);
const brusselS4 = obtainInstruction('brusselsSprouts', 4);
const brusselS5 = obtainInstruction('brusselsSprouts', 5);
const brusselS6 = obtainInstruction('brusselsSprouts', 6);
const brusselS7 = obtainInstruction('brusselsSprouts', 7);

Promise.all([brusselS0, brusselS1, brusselS2, brusselS3, brusselS4, brusselS5, brusselS6, brusselS7])
  .then((values)=>{
      values.forEach((value)=>{
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>`;
      });
      })
      .finally(()=> {
        document.querySelector("#brusselsSprouts").innerHTML += `<li>brussels sprouts are ready!</li>`;
        document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
      });