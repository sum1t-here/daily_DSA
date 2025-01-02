use std::io;

fn main() {
    let mut input = String::new();

    // Read the number of words
    io::stdin().read_line(&mut input).expect("Failed to read input");
    let n: usize = input.trim().parse().expect("Invalid number of words");

    // Process each word
    for _ in 0..n {
        input.clear();
        io::stdin().read_line(&mut input).expect("Failed to read input");
        let word = input.trim();

        // Abbreviate the word if it's too long
        if word.len() > 10 {
            let abbreviation = format!(
                "{}{}{}",
                word.chars().next().unwrap(),
                word.len() - 2,
                word.chars().last().unwrap()
            );
            println!("{}", abbreviation);
        } else {
            println!("{}", word);
        }
    }
}
