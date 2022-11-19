//SPDX-License-Identifier:MIT
pragma solidity ^0.8.7;

contract Kryptage {
    string public Name = "Kryptage";
    uint public fileCount = 0;
    //declaring class of File
    mapping(uint => File) public _file;
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

    //declaring event for recording after uploading

    event afterUploading(
        string Name,
        string Type,
        string Description,
        string Hash,
        uint Size,
        uint Id,
        uint Timestamp,
        address payable owner
    );

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

        require(msg.sender != address(0));
        require(fileSize > 0);

        fileCount += 1;

        //mapping files to the contract(adding files)
        //here 'now' keyword is used to get the timestamp of current mined block
    }
}
