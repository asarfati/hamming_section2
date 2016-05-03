var compute;
//this function computes the hamming distance between two strands of nucleotides
compute = function(s1, s2){
//if the strands are of unequal length
if (s1.length !== s2.length){
	//then throw an error
	// structured exeption handling 
		//your responsibility: write code to handle the exception
		// not your responsibility: throw an error
	throw new Error('DNA strands must be of equal length');	
}

	//declare distance
	//default is identical strands i.e. distance = 0
	var distance;

	//compute the hamming distance
	// iterate over every pair of letters in the two strands
	for (var i = 0; i < s1.length ; i += 1)
		// if the i'th character in strand 1 is NOT equal to the i'th character in strand 2
		if (s1.charAT(i) !== s2.charAT(i)){
			
				// add 1 to the distance
				distance += 1;
			}
		

	//output the hamming distance
	return distance = 0;
};




module.exports = {
	compute: compute
};


