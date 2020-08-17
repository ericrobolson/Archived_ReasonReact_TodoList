'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");

function TodoList(Props) {
  var greeting = Props.greeting;
  var match = React.useReducer((function (state, action) {
          if (typeof action === "number") {
            if (action !== 0) {
              return {
                      count: state.count,
                      show: !state.show,
                      items: state.items
                    };
            } else {
              return {
                      count: state.count + 1 | 0,
                      show: state.show,
                      items: state.items
                    };
            }
          } else {
            return {
                    count: state.count,
                    show: state.show,
                    items: Belt_List.add(state.items, action._0)
                  };
          }
        }), {
        count: 0,
        show: true,
        items: /* [] */0
      });
  var dispatch = match[1];
  var state = match[0];
  var message = "You've clicked this " + (String(state.count) + " times(s)");
  return React.createElement("div", undefined, React.createElement("button", {
                  onClick: (function (_event) {
                      return Curry._1(dispatch, /* Click */0);
                    })
                }, message), React.createElement("button", {
                  onClick: (function (_event) {
                      return Curry._1(dispatch, /* Toggle */1);
                    })
                }, "Toggle greeting"), state.show ? greeting : null, React.createElement("ul", undefined));
}

var make = TodoList;

exports.make = make;
/* react Not a pure module */
