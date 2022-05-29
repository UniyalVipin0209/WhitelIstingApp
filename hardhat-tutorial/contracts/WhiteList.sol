//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

contract WhiteList{

    //Max No of WhiteListed Addresses
    uint8 public maxWhiteListedAddresses;
    mapping(address=>bool) public whiteListedAddresses;

    //numAddressesWhiteListed is used to keep track of how many addresses have been whitelisted
    uint8 public numAddressesWhiteListed;

    constructor(uint8 _maxWhiteListedAddresses){
        maxWhiteListedAddresses = _maxWhiteListedAddresses;
    }

    function addAddressToWhiteList() public{
        require(!whiteListedAddresses[msg.sender],"Sender has already been whitelisted!!");
        require(numAddressesWhiteListed < maxWhiteListedAddresses, "No more address can be added, Limited reach!!");

        whiteListedAddresses[msg.sender] = true;
        numAddressesWhiteListed = numAddressesWhiteListed + 1;
    }

}