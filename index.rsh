'reach 0.1';

const Player = {
    getHand: Fun([],UInt),
    seeOutcome: Fun([UInt],Null),
};

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
        wager: UInt ,
        // Specify Alice's interact interface here
    });
    const Bob   = Participant('Bob', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    // Specify Bob's interact interface here
    });
    init();
    // write your program here

    Alice.only(() => {
        const handAlice = declassify(interact.getHand());
        const wager = declassify(interact.wager);
      });
      Alice.publish(handAlice, wager)
        .pay(wager);
      commit();

      unknowable(Bob,Alice(handAlice))
      Bob.only(() => {
        interact.acceptWager(wager);
        const handBob = declassify(interact.getHand());
      });
      Bob.publish(handBob)
        .pay(wager);
    
      const outcome = (handAlice + (4 - handBob)) % 3;
      const [toAlice, toBob]=
      outcome==0?[0,2]:
      outcome==1?[1,1]:
      /*  draw */[2,0];
      transfer(toAlice * wager).to(Alice);
      transfer(toBob * wager).to(Bob);
      commit();

    each([Alice,Bob],() => {
        interact.seeOutcome(outcome);
    });
});//video 1 ends here