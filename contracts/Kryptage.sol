//SPDX-License-Identifier:MIT
pragma solidity ^0.8.7;

contract Kryptage {
    string Name = "Kryptage";

    //declaring class of File
    struct File {
        string Name;
        string Type;
        string Description;
        string Hash;
        uint Size;
        uint Id;
        uint Timestamp;
        address payable owner;
    }
    //mapping the file id to the class File
    //declaring a public mapping to access outside the smart contract
    mapping(uint => File) public _file;

    function uploadFile(string memory fileName,string memory fileType,string memory fileDescription,string memory fileHash,uint _ileSize) public{

    }
}
