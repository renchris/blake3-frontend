#!/bin/bash
for i in {1..500}
do
   echo $i | b3sum --length 2 --no-names >> loop-output-again-500.txt
done