import React from 'react';
import ReactDOM from 'react-dom';

var RedocBox = React.createClass({

         componentDidMount: function() {
                Redoc.init('http://petstore.swagger.io/v2/swagger.json');
          },

          render: function() {
            return <div ref={el => this.el = el} />;
          }

});


export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <RedocBox/>
      </div>);
  }
}
