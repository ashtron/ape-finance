const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("TestContract contract", () => {
    it("Sets TestString correctly", async () => {
        const TestContractFactory = await ethers.getContractFactory("TestContract")
        const TestContract = await TestContractFactory.deploy()
        
        const testString = await TestContract.testString.call()
        expect(testString).to.equal("Colorless green ideas sleep furiously.")
    })
})