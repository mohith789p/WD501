const firstname = () => console.log("Potnuru");
const secondname = () => console.log("Mohith");

const printfullname = () => {
  console.log("My name is ");
  setTimeout(firstname, 0);
  secondname();
};

printfullname();
