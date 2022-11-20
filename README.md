# SCRIPTING WITH B3SUM

## 1. Install b3sum script (using Rust, needing Cargo)
`cargo install b3sum` (https://crates.io/crates/b3sum)
May take a few re-attempts with network errors

    Updating crates.io index
       Fetch [=====>                   ]  26.48%, 18.29MiB/s                  
    warning: spurious network error (2 tries remaining): SecureTransport error: connection closed via error; class=Net (12)

## 2. Create a bash script to run 1 to N number of times

write script

    vim loop-script.sh

script

    #!/bin/bash
    for i in {1..500}
    do
    echo $i | b3sum --length 2 --no-names >> loop-output-again-500.txt
    done

allow write access

    chmod +x loop-script.sh  

run script

    ./loop-script.sh  

For i times 1 to 500, using number i as the input, create a 2-byte output per line of the output file loop-output-again-500.txt

# Example app with [chakra-ui](https://github.com/chakra-ui/chakra-ui) and TypeScript

I was planning to generate 100 2-byte outputs via front-end JavaScript and the blake3 javascript package library, however, couldn't get past errors, so figured out a way in the command line with B3SUM