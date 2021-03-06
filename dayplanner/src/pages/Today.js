import React from 'react';

const Today = () => {

  const todoItems = [
    { id: "06", time: "6am", text: "first test input"},
    { id: "07", time: "7am", text: ""},
    { id: "08", time: "8am", text: ""},
    { id: "09", time: "9am", text: ""}
  ];

  // save todo
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // try {
    //   await addToDo({
    //     variables: { todoText },
    //   });
    // } catch (e) {
    //   console.error(e);
    // }
  };

  return (
    <wrapper>
      {todoItems.map(todo => {
        return (
        <form onSubmit={handleFormSubmit}>
          <div>{ todo.time }</div>
          <input id={ todo.id } value={ todo.text} class=""></input>
          <button>Save</button>
        </form>
        )
      })}

      {/* <form class="row time-block">
        <div class="col-sm-1 hour">
          6am
        </div>
        <input type="text" id="06" value="" class="textarea col-sm-10" />
        <div id="btn6" class="col-sm-1 saveBtn">
          <i class="fas fa-save"></i>
        </div>
      </form>

      <form class="row time-block">
        <div class="col-sm-1 hour">
          7am
        </div>
        <input type="text" id="07" value="" class="textarea col-sm-10" />
        <div id="btn7" class="col-sm-1 saveBtn">
          <i class="fas fa-save"></i>
        </div>
      </form>

      <form class="row time-block">
        <div class="col-sm-1 hour">
          8am
        </div>
        <input type="text" id="08" value="" class="textarea col-sm-10" />
        <div id="btn8" class="col-sm-1 saveBtn">
          <i class="fas fa-save"></i>
        </div>
      </form>

      <form class="row time-block">
        <div class="col-sm-1 hour">
          9am
        </div>
        <input type="text" id="09" value="" class="textarea col-sm-10" />
        <div id="btn9" class="col-sm-1 saveBtn">
          <i class="fas fa-save"></i>
        </div>
      </form>

      <form class="row time-block">
        <div class="col-sm-1 hour">
          10am
        </div>
        <input type="text" id="10" value="" class="textarea col-sm-10" />
        <div id="btn10" class="col-sm-1 saveBtn">
          <i class="fas fa-save"></i>
        </div>
      </form>

      <form class="row time-block">
        <div class="col-sm-1 hour">
          11am
        </div>
        <input type="text" id="11" value="" class="textarea col-sm-10" />
        <div id="btn11" class="col-sm-1 saveBtn">
          <i class="fas fa-save"></i>
        </div>
      </form>

      <form class="row time-block">
        <div class="col-sm-1 hour">
          12pm
        </div>
        <input type="text" id="12" value="" class="textarea col-sm-10" />
        <div id="btn12" class="col-sm-1 saveBtn">
          <i class="fas fa-save"></i>
        </div>
      </form>

      <div class="row time-block">
        <div class="col-sm-1 hour">
          1pm
        </div>
        <input type="text" id="13" value="" class="textarea col-sm-10" />
        <div id="btn13" class="col-sm-1 saveBtn">
          <i class="fas fa-save"></i>
        </div>
      </div>

      <form class="row time-block">
        <div class="col-sm-1 hour">
          2pm
        </div>
        <input type="text" id="14" value="" class="textarea col-sm-10" />
        <div id="btn14" class="col-sm-1 saveBtn">
          <i class="fas fa-save"></i>
        </div>
      </form>

      <form class="row time-block">
        <div class="col-sm-1 hour">
          3pm 
        </div>
        <input type="text" id="15" value="" class="textarea col-sm-10" />
        <div id="btn15" class="col-sm-1 saveBtn">
          <i class="fas fa-save"></i>
        </div>
      </form>


      <form class="row time-block">
        <div class="col-sm-1 hour">
          4pm 
        </div>
        <input type="text" id="16" value="" class="textarea col-sm-10" />
        <div id="btn16" class="col-sm-1 saveBtn">
          <i class="fas fa-save"></i>
        </div>
      </form>

      <form class="row time-block">
        <div class="col-sm-1 hour">
          5pm 
        </div>
        <input type="text" id="17" value="" class="textarea col-sm-10" />
        <div id="btn17" class="col-sm-1 saveBtn">
          <i class="fas fa-save"></i>
        </div>
      </form>

      <form class="row time-block">
        <div class="col-sm-1 hour">
          6pm 
        </div>
        <input type="text" id="18" value="" class="textarea col-sm-10" />
        <div id="btn18" class="col-sm-1 saveBtn">
          <i class="fas fa-save"></i>
        </div>
      </form>

      <form class="row time-block">
        <div class="col-sm-1 hour">
          7pm 
        </div>
        <input type="text" id="19" value="" class="textarea col-sm-10" />
        <div id="btn19" class="col-sm-1 saveBtn">
          <i class="fas fa-save"></i>
        </div>
      </form>

      <form class="row time-block">
        <div class="col-sm-1 hour">
          8pm 
        </div>
        <input type="text" id="20" value="" class="textarea col-sm-10" />
        <div id="btn20" class="col-sm-1 saveBtn">
          <i class="fas fa-save"></i>
        </div>
      </form> */}

    </wrapper>
  )
};

export default Today;