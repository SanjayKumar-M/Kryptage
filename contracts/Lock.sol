// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Kryptage{
    string message = "Hello This is kryptage";
   function greet() public view returns(string memory){
    return message;
   }
}
