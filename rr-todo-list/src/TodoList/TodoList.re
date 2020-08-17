type state = {
    count: int,
    show: bool,
    items: list(string),
};

type action = 
    | Click
    | Toggle
    | AddItem(string)
    ;

[@react.component]
let make = (~greeting) => {
  let (state, dispatch) = React.useReducer((state, action) =>
  switch (action) {
  | Click => {...state, count: state.count + 1}
  | Toggle => {...state, show: ! state.show}
  | AddItem(i) => {...state, items: state.items->Belt.List.add(i)}
  }, {count: 0, show: true, items: []});

  let message =
    "You've clicked this " ++ string_of_int(state.count) ++ " times(s)";
  <div>
    <button onClick={_event => dispatch(Click)}>
      {ReasonReact.string(message)}
    </button>
    <button onClick={_event => dispatch(Toggle)}>
      {ReasonReact.string("Toggle greeting")}
    </button>
    {state.show ? ReasonReact.string(greeting) : ReasonReact.null}



    <ul>
        
    </ul>
  </div>;
};