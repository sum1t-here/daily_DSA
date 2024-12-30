use rust_dsa::sorting::insertion_sort::insertion_sort;

fn main() {
    let mut arr = [12, 11, 13, 5, 6];
    println!("Original array: {:?}", arr);
    insertion_sort(&mut arr);
    println!("Sorted array: {:?}", arr);
}
