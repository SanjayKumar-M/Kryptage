//SPDX-License-Identifier:MIT
pragma solidity ^0.8.7;

contract Kryptage {
    string public Name = "Kryptage";
    uint public fileCount = 0;

    //declaring class of File
    mapping(uint => File) public _file;

    struct File {
        uint Id;
        string Hash;
        uint Size;
        string Type;
        string Name;
        string Description;
        uint Timestamp;
        address owner;
    }
    //mapping the file id to the class File
    //declaring a public mapping to access outside the smart contract

    //declaring event for recording after uploading

    event afterUploading(
        uint Id,
        string Hash,
        uint Size,
        string Type,
        string Name,
        string Description,
        uint Timestamp,
        address owner
    );

 

    //declared a fucntion for uploading a file
    function uploadFile(
        string memory fileHash,
        uint fileSize,
        string memory fileType,
        string memory fileName,
        string memory fileDescription
    ) public {
        //Confirming that all the file parameters are greater than 0
        //and owner address exists
        require(bytes(fileHash).length > 0);

        require(bytes(fileType).length > 0);

        require(bytes(fileDescription).length > 0);
        require(bytes(fileName).length > 0);

        require(msg.sender != address(0));
        require(fileSize > 0);

        fileCount += 1;

        //mapping files to the contract(adding files)
        //here 'now' keyword is used to get the Timestampstamp of current mined block
        _file[fileCount] = File(
            fileCount,
            fileHash,
            fileSize,
            fileType,
            fileName,
            fileDescription,
            block.timestamp,
            msg.sender
        );

        emit afterUploading(
            fileCount,
            fileHash,
            fileSize,
            fileType,
            fileName,
            fileDescription,
            block.timestamp,
            msg.sender
        );
    }
}
