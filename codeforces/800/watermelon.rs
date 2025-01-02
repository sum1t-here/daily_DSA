use std::io;

fn main() {
    // create a mutable string to store the input
    let mut input = String::new();

    io::stdin().read_line(&mut input).expect("Failed to read line");

    let w: u32 = input.trim().parse().expect("Please type a number!");

    if w >= 4 && w % 2 == 0 {
        println!("YES");
    } else {
        println!("NO");
    }
}
