
function selection()
{  
    vis_delay=0;
    
 
    for (var i = 0; i < arr_size-1; i++)
    {
        /* find the min element in the unsorted a[i .. aLength-1] */
    
        /* assume the min is the first element */
        div_update(divs[i], div_sizes[i], "lightyellow");

        
        var jMin = i; //minimum index
      
        /* test against elements after i to find the smallest */
        for (var j = jMin+1; j < arr_size; j++)
        {
            div_update(divs[j], div_sizes[j], "green");

            /* if this element is less, then it is the new minimum */
            if (div_sizes[jMin]< div_sizes[j])
            {
                /* found new minimum; remember its index */
                div_sizes[j] = div_sizes[jMin];
            }
        }
    
        if (div_sizes[jMin] != i) 
        {
            swap(a[i], div_sizes[jMin]);
        }
        div_update(divs[jMin], div_sizes[jMin], "green");

    }
    div_update(divs[i], div_sizes[i], "lightyellow");
    enable_buttons();
}
