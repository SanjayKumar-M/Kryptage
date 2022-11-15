//SPDX-License-Identifier:MIT
pragma solidity^0.8.7;

contract Kryptage{
    string Hello;
    function sayHello() public view returns(string memory){
        string memory Hello1 = Hello;
        return Hello1;
    }

}