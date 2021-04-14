const { assert } = require("chai");

const AliumToken = artifacts.require('AliumToken');

contract('AliumToken', ([alice, bob, carol, dev, minter]) => {
    beforeEach(async () => {
        this.cake = await AliumToken.new({ from: minter });
    });


    it('mint', async () => {
        await this.cake.mint(alice, 1000, { from: minter });
        assert.equal((await this.cake.balanceOf(alice)).toString(), '1000');
    })
});
