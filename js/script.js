// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {

  const firstinputNumber = parseInt(document.getElementById("firstinputNumber").value)
  const secondinputNumber = parseInt(document.getElementById("secondinputNumber").value)

  while (counter < secondinputNumber) {
    answer = answer + firstinputNumber
    counter = counter + 1
  }

  document.getElementById("answer").innerHTML = 
    firstinputNumber + " x " + secondinputNumber + "=" + answer
}
