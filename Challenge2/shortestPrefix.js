let strings = ["dog", "cat", "apple", "apricot", "fish"];

let stringsLen = strings.length;
let results =[];

const shortestPrefix = (strings) =>  {

    //compare first element(string) just with its right
    let j = 0;
    while ( j < Math.min(strings[0].Length - 1, strings[1].Length - 1))
    {
        if (strings[0][j] == strings[1][j])
            j++;
        else
            break;
    }
    
    let ind = 0;
    results[ind++] = strings[0].substring(0, j + 1); 

    //keep prefix of second element(string) from its left
    temp_prefix = strings[1].substring(0, j + 1);
    for (let i = 1; i < stringsLen - 1; i++){

        //prefix of all other elements from their own right 
        j = 0;
        while (j < Math.min( strings[i].Length - 1, strings[i + 1].Length - 1 ))
        {
            if (strings[i][j] == strings[i + 1][j])
                j++;
            else
                break;
        }
        new_prefix = strings[i].substring(0, j+1);
   
        //compare the 2 prefixes
        if (temp_prefix.Length > new_prefix.Length )
            results[ind++] = temp_prefix;
        else
            results[ind++] = new_prefix;  
    //keep prefix of element[i+1] from its left 
    temp_prefix = strings[i+1].substring(0, j+1);
    }

    //prefix for last element(string)
     j = 0;
     sec_last = strings[stringsLen-2] ;
    
     last = strings[stringsLen-1];
    
    while (j < Math.min( sec_last.Length-1, last.Length-1))
    {
        if (sec_last[j] == last[j])
            j++;
        else
            break;
    }
    
    results[ind] = last.substring(0, j+1);
    return results;
}

const result = document.querySelector("#shortest-prefix");
result.textContent = shortestPrefix(strings);

