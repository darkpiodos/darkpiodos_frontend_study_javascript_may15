import React, { useState, useEffect } from "react";
import "./css.scss";
import { useNavigate } from "react-router-dom";
const LearnJavascipt = () => {
  const navigate = useNavigate();
  const goback = () => {
    navigate("/");
  };
  const reload = () => {
    window.location.reload();
  };

  //   Javascript Activity Starts Here!!!
  const showHiddenElements = () => {
    document.getElementById("hidden-elements").style.display = "block";
  };
  //   Javascript Activity Ends Here!!!
  const addElements = () => {
    document.getElementById("h2-element").innerHTML =
      "Thank you for Giving Me a Value!";
  };
  //   Javascript Activity Starts Here!!!
  const innerHTML = () => {
    document.getElementById("js-output").innerHTML =
      "These are the 5 ways on how to display an output in JAVASCRIPT";
  };
  //   Javascript Activity Ends Here!!!

  //   Javascript Activity Starts Here!!!
  const consoleLog = () => {
    console.log("This is an addition: 1 + 1 is equals to " + " " + (1 + 1));
  };

  //   Javascript Activity Ends Here!!!

  //   Javascript Activity Starts Here!!!
  const documentWrite = () => {
    document.write("This is an addition: 1 + 1 is equals to " + " " + (1 + 1));
    window.location.reload();
  };

  //   Javascript Activity Ends Here!!!

  //   Javascript Activity Starts Here!!!
  const windowAlert = () => {
    window.alert("This is an addition: 1 + 1 is equals to " + " " + (1 + 1));
  };

  //   Javascript Activity Ends Here!!!

  //   Javascript Activity Starts Here!!!
  const windowPrint = () => {
    window.print();
  };

  //   Javascript Activity Ends Here!!!

  //   Javascript Activity Starts Here!!!
  let w, x, z;
  w = 12;
  x = 15;
  z = w + x;
  const displayResult = () => {
    document.getElementById("jsstatementresult").innerHTML =
      "w + x is equal to: " + " " + z;
  };
  //   Javascript Activity Ends Here!!!
  let a = 1;
  let b = 2;
  let c = a + b;

  const d = 4;
  const e = 5;
  const f = d + e;

  const g = 6;
  const h = 7;
  let i = g + h;

  const displayVariablesResult = () => {
    document.getElementById("letresult").innerHTML =
      "let a = 1, let b = 2, let c = a + b. So the result is: " + c;
    document.getElementById("constresult").innerHTML =
      "const d = 4, const e = 5, const f = d + e. So the result is: " + f;
    document.getElementById("mixedresult").innerHTML =
      "const g = 6, const h = 7, let i = g + h. So the result is: " + i;
  };

  //   Javascript Activity Starts Here!!!
  const const_array_object = () => {
    const cars = [" Toyota ", " Audi ", " Ford ", " Mitsubishi "];
    cars.push(" Suzuki ");
    cars[0] = " Hyundai ";
    document.getElementById("constarray").innerHTML = cars;

    const pets = { name: "barky", type: "dog", color: "brown" };
    pets.name = "tiger";
    pets.owner = "darwin";
    document.getElementById("constobject").innerHTML =
      pets.name + " , " + pets.type + " , " + pets.color + " , " + pets.owner;
  };
  //   Javascript Activity Ends Here!!!

  //   Javascript Activity Starts Here!!!
  const jsoperators = () => {
    let arithmetic = 3;
    let arithmeticresult = (100 + 50) * arithmetic;
    document.getElementById("arithmetic").innerHTML = arithmeticresult;

    let assignment = 100;
    assignment *= 10;
    document.getElementById("assignment").innerHTML = assignment;

    let string_one = "short";
    let string_two = "verylong";
    let stringComparison = string_one < string_two;

    document.getElementById("string").innerHTML =
      "Is string one lesser than string two? " +
      " " +
      "The correct answer is: " +
      " " +
      stringComparison;
  };

  //   Javascript Activity Ends Here!!!

  //   Javascript Activity Starts Here!!!
  const dataTypes = () => {
    let number_one = 1;
    let number_two = 2;
    let addNumbers = number_one + number_two;
    document.getElementById("number").innerHTML = typeof addNumbers;

    let string_one = "Darwin Piodos";
    let string_two = "Angel Bron";
    document.getElementById("string").innerHTML = typeof string_one;
  };
  //   Javascript Activity Ends Here!!!

  //   Javascript Activity Starts Here!!!
  function changeColor() {
    const currentColor =
      document.getElementById("changeColor").style.backgroundColor;

    if (currentColor == "red") {
      document.getElementById("changeColor").style.backgroundColor = "green";
    } else {
      document.getElementById("changeColor").style.backgroundColor = "red";
    }
  }
  //   Javascript Activity Ends Here!!!
  //   Javascript Activity Starts Here!!!
  const [color, setColor] = useState("black");

  useEffect(() => {
    const handleColorChange = () => {
      setColor("blue"); // Change this to your desired color
    };

    const buttonEvent = document.getElementById("eventListenerButton");
    if (buttonEvent) {
      buttonEvent.addEventListener("click", handleColorChange);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (buttonEvent) {
        buttonEvent.removeEventListener("click", handleColorChange);
      }
    };
  }, []);

  //   Javascript Activity Ends Here!!!

  //   Javascript Activity Starts Here!!!

  //   Javascript Activity Ends Here!!!
  //   Javascript Activity Starts Here!!!

  //   Javascript Activity Ends Here!!!

  //   Javascript Activity Starts Here!!!

  //   Javascript Activity Ends Here!!!
  //   Javascript Activity Starts Here!!!

  //   Javascript Activity Ends Here!!!

  //   Javascript Activity Starts Here!!!

  //   Javascript Activity Ends Here!!!
  //   Javascript Activity Starts Here!!!

  //   Javascript Activity Ends Here!!!

  //   Javascript Activity Starts Here!!!

  //   Javascript Activity Ends Here!!!

  return (
    <div>
      <h1>Learn Javascipt</h1>
      <span className="button-top-container">
        <button onClick={goback}>Go back</button>
        <button onClick={reload}>Reload</button>
      </span>

      <div className="activity-container">
        <p style={{ marginTop: "2rem" }}>
          <span>
            <b>Activity Title: </b>
          </span>
          Show Hidden Elements
        </p>
        <h2 id="hidden-elements" style={{ display: "none" }}>
          Thank you for showing me!!!
        </h2>
        <button onClick={showHiddenElements}>
          Click to show hidden elements
        </button>
      </div>

      <div className="activity-container">
        <p style={{ marginTop: "2rem" }}>
          <span>
            <b>Activity Title: </b>
          </span>
          Javasctipt in body
        </p>
        <h2 id="h2-element"></h2>
        <button onClick={addElements}>Click Button</button>
      </div>

      <div className="activity-container">
        <p style={{ marginTop: "2rem" }}>
          <span>
            <b>Activity Title: </b>
          </span>
          JS Output
        </p>
        <h2 id="js-output"></h2>
        <span className="js-output-button-container">
          <button onClick={innerHTML}>innerHTML</button>
          <button onClick={documentWrite}>documentWrite</button>
          <button onClick={consoleLog}>consoleLog</button>
          <button onClick={windowAlert}>windowAlert</button>
          <button onClick={windowPrint}>windowPrint</button>
        </span>
      </div>
      <div className="activity-container">
        <p style={{ marginTop: "2rem" }}>
          <span>
            <b>Activity Title: </b>
          </span>
          JS Statements
        </p>
        <h3>If w=12 and x=15, get the value of z by adding w and x.</h3>
        <h2 id="jsstatementresult"></h2>
        <button onClick={displayResult}>
          Click button to get the value of Z
        </button>
      </div>

      <div className="activity-container">
        <p style={{ marginTop: "2rem" }}>
          <span>
            <b>Activity Title: </b>
          </span>
          JS Variables
        </p>
        <h3 id="var-head">let</h3>
        <p id="letresult"></p>
        <h3 id="var-head">const</h3>
        <p id="constresult"></p>
        <h3 id="var-head">mixed values</h3>
        <p id="mixedresult"></p>
        <button onClick={displayVariablesResult}>
          View variables and result
        </button>
      </div>

      <div className="activity-container">
        <p style={{ marginTop: "2rem" }}>
          <span>
            <b>Activity Title: </b>
          </span>
          Const Variable
        </p>
        <h3>Const Array</h3>
        <p id="constarray"></p>
        <h3>Const Object</h3>
        <p id="constobject"></p>

        <button onClick={const_array_object}>Click Button</button>
      </div>

      <div className="activity-container">
        <p style={{ marginTop: "2rem" }}>
          <span>
            <b>Activity Title: </b>
          </span>
          Javascript Operators
        </p>
        <h3 className="jsoperators">Arithmetic Operators</h3>
        <p>
          let arithmetic = 3; let arithmeticresult = (100 + 50) * arithmetic;
        </p>
        <p id="arithmetic" className="js_style"></p>
        <h3 className="jsoperators">Assignment Operators</h3>
        <p> let assignment = 100; assignment *= 10;</p>
        <p id="assignment" className="js_style"></p>
        <h3 className="jsoperators">Comparison Operators</h3>
        <p>
          Comparison operators are fully described in the JS Comparisons
          chapter.
        </p>

        <p id="comparison" className="js_style"></p>
        <h3 className="jsoperators">String Operators</h3>
        <p>
          let string_one = "short"; let string_two = "verylong"; let
          stringComparison = string_one (lesserthan?) string_two;
        </p>

        <p id="string" className="js_style"></p>

        <h3 className="jsoperators">Logical Operators</h3>
        <p>
          Logical operators are fully described in the JS Comparisons chapter.
        </p>
        <p id="logical" className="js_style"></p>

        <h3 className="jsoperators">Bitwise Operators</h3>
        <p>
          Bit operators work on 32 bits numbers. Any numeric operand in the
          operation is converted into a 32 bit number. The result is converted
          back to a JavaScript number.
        </p>
        <p id="bitwise" className="js_style"></p>

        <h3 className="jsoperators">Ternary Operators</h3>
        <p>pastehere</p>
        <p id="ternary" className="js_style"></p>

        <h3 className="jsoperators">Type Operators</h3>
        <p>pastehere</p>
        <p id="type" className="js_style"></p>

        <button onClick={jsoperators}>View JS Operators Result</button>
      </div>

      <div className="activity-container">
        <p style={{ marginTop: "2rem" }}>
          <span>
            <b>Activity Title: </b>
          </span>
          Javascript DataTypes
        </p>
        <h3 className="datatypes">Number</h3>
        <p>
          let number_one = 1; let number_two = 2; let addNumbers = number_one +
          number_two;
        </p>
        <p className="dt_value" id="number"></p>
        <h3 className="datatypes">String</h3>
        <p>let name="Darwin Piodos"</p>
        <p className="dt_value" id="string"></p>
        <h3 className="datatypes">Boolean</h3>
        let x=false; let y=true;
        <p className="dt_value" id="boolean"></p>
        <h3 className="datatypes">Undefined</h3>
        let x; let y;
        <p className="dt_value undefined"></p>
        <h3 className="datatypes">Null</h3>
        let a=null; let b=null;
        <p className="dt_value null"></p>
        <h3 className="datatypes">Array</h3>
        <p>const subject=["English", "Math", "Filipino"]</p>
        <p className="dt_value array"></p>
        <h3 className="datatypes">Object</h3>
        <p>
          const data= opencurlybracket name:"darwin", email:"darwin@gmail.com"
          password:"darwin123" closecurlybracket
        </p>
        <p className="dt_value object"></p>
        <h3 className="datatypes function">Function</h3>
        <button onClick={dataTypes}>Reveal typeOf DataTypes</button>
      </div>

      <div className="activity-container">
        <p style={{ marginTop: "2rem" }}>
          <span>
            <b>Activity Title: </b>
          </span>
          Change Background Color of an Element
        </p>
        <div className="change-color" id="changeColor" onClick={changeColor}>
          Tap to change color
        </div>
        <h3></h3> {/* <button onClick={addElements}>Click Button</button> */}
      </div>

      <div className="activity-container">
        <p style={{ marginTop: "2rem" }}>
          <span>
            <b>Activity Title: </b>
          </span>
          JS Define Javascript Object
        </p>
        <h3 id="head-js-object">Object Literal</h3>

        <p id="displayObject"></p>
        <h3 id="head-js-object">New Keyword</h3>
        <span></span>

        <p id="displayKeyword"></p>
        <h3 id="head-js-object">Object Constructor</h3>
        <span></span>

        <p id="displayConstructor"></p>
      </div>

      <div className="activity-container">
        <p style={{ marginTop: "2rem" }}>
          <span>
            <b>Activity Title: </b>
          </span>
          Object Method
        </p>
        <h3 id="displayObjectMethod"></h3>
        {/* <button onClick={addElements}>Click Button</button> */}
      </div>

      <div className="activity-container">
        <p style={{ marginTop: "2rem" }}>
          <span>
            <b>Activity Title: </b>
          </span>
          JS Add Event Listener
        </p>
        <h3 id="red-container-notice">
          LOOK AT THE RED CONTAINER ABOVE, IT WILL CHANGE ON COLOR
        </h3>
        <button id="eventListenerButton">Click Button</button>
      </div>

      {/* This is my template */}
      <div className="activity-container">
        <p style={{ marginTop: "2rem" }}>
          <span>
            <b>Activity Title: </b>
          </span>
          Template
        </p>
        <h3></h3> {/* <button onClick={addElements}>Click Button</button> */}
      </div>
      {/* This is my template */}
    </div>
  );
};

export default LearnJavascipt;
