// import {User} from "./js/age.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function(){
  $('form').submit(function(e){
    e.preventDefault();
    const userAge = $('input#age').val();
    const userLifeE = $('input#life-exp').val();
    userAge;
    userLifeE;
  });
});