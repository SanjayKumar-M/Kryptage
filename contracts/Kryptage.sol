//SPDX-License-Identifier:MIT
pragma solidity ^0.8.7;

contract Kryptage {
    string Name = "Kryptage";

    //declaring class of File
    struct File {
        string Name;
        string Type;
        string Description;
        string fileHash;
        uint Id;
        uint Timestamp;
        address payable owner;
    }
   //mapping the file id to the class File (Nested mapping)
   //declaring a public mappung t
    mapping (uint => File) public _file;
}
