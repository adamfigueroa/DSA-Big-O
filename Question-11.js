// The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

// There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
// The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk
// Input:

// Rod A	Rod B	Rod C
// ----		
// ---------		
// -------------		
// Output:

// Rod A	Rod B	Rod C
// ----
// ---------
// -------------

// Derive an algorithm to solve the Tower of Hanoi puzzle.

// Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.

// If you are given 5 disks, how do the rods look like after 7 recursive calls?

// column 1 has disks 3,4,and 5 
// column 2 has no disks 
// column 3 has disks 1,2,and 3 


// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?

// 3 disks: 7 moves
// 4 disks: 15 moves
// 5 disks: 31 moves


// What is the runtime of your algorithm?

// Exponential time O(2^n)

function towerOfHanoiDestroyer(source, destination, extra, disks) {
    if (disks <= 0) {
        return;
    }

    towerOfHanoiDestroyer(source, extra, destination, disks - 1)
    console.log(`Disk #${disks} needs to move from ${source} to ${destination}`);

    towerOfHanoiDestroyer(extra, destination, source, disks - 1)
}
towerOfHanoiDestroyer('source', 'destination', 'extra', 5)