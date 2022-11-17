//SPDX-License-Identifier:MIT
pragma solidity ^0.8.7;

contract Kryptage {
    string Name = "Kryptage";
    uint fileCount = 0;
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

    //declared a fucntion for uploading a file
    function uploadFile(
        string memory fileName,
        string memory fileType,
        string memory fileDescription,
        string memory fileHash,
        uint fileSize
    ) public {
        //Confirming that all the file parameters are greater than 0
        //and owner address exists
        require(bytes(fileName).length > 0);

        require(bytes(fileType).length > 0);

        require(bytes(fileDescription).length > 0);

        require(bytes(fileHash).length > 0);

        require(fileSize > 0);
        
        require(msg.sender != address(0));

        fileCount += 1;
    }
}
