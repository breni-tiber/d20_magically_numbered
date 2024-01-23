If any air is trapped inside a d20 near a vertex numbers surrounding that vertex would be rolled more often. 
As the average number on a d20 is 10.5, five average numbers would add to 52.5 and any vertex with that vertex sum could be considered "more random".

The script in this repository finds all configurations such:
* opposite sides sum to 21 (as is usually done with d20)
* for each vertex the five sides surrounding it sum to 52 or 53


Throughout the code as well as in the listings below the fairly common d20 spindown die (20 neighbours 19, 16, and 13) is used as a reference point.
The first listing for example has to be interpreted such that the faces surrounding 20 on a spindown (19-11) are should be relabeled as _4_, 5, 9, _14_, 3, 2, _13_, 10, 6.
Numbers in italics (4, 14, 13) share an edge with 20 while the others share only a point with 20.

Here are all 78 configurations satisfying the above conditions: 

1, 17, 16, 12, 7, 18, 19, 8, 11, 15, 6, 10, 13, 2, 3, 14, 9, 5, 4, 20

1, 17, 16, 11, 8, 19, 18, 7, 12, 15, 6, 9, 14, 3, 2, 13, 10, 5, 4, 20

1, 17, 16, 11, 8, 18, 19, 7, 12, 15, 6, 9, 14, 2, 3, 13, 10, 5, 4, 20

1, 17, 16, 11, 7, 19, 18, 8, 12, 15, 6, 9, 13, 3, 2, 14, 10, 5, 4, 20

1, 17, 16, 10, 8, 19, 18, 7, 12, 15, 6, 9, 14, 3, 2, 13, 11, 5, 4, 20

1, 17, 15, 12, 8, 18, 19, 7, 11, 16, 5, 10, 14, 2, 3, 13, 9, 6, 4, 20

1, 17, 15, 12, 7, 19, 18, 8, 11, 16, 5, 10, 13, 3, 2, 14, 9, 6, 4, 20

1, 17, 15, 12, 7, 18, 19, 8, 11, 16, 5, 10, 13, 2, 3, 14, 9, 6, 4, 20

1, 17, 15, 12, 7, 18, 19, 8, 10, 16, 5, 11, 13, 2, 3, 14, 9, 6, 4, 20

1, 17, 15, 11, 8, 19, 18, 7, 12, 16, 5, 9, 14, 3, 2, 13, 10, 6, 4, 20

1, 16, 18, 11, 7, 19, 17, 8, 15, 12, 9, 6, 13, 4, 2, 14, 10, 3, 5, 20

1, 16, 17, 11, 7, 19, 18, 8, 12, 15, 6, 9, 13, 3, 2, 14, 10, 4, 5, 20

1, 16, 15, 12, 8, 18, 19, 7, 11, 17, 4, 10, 14, 2, 3, 13, 9, 6, 5, 20

1, 16, 12, 15, 8, 17, 19, 7, 11, 18, 3, 10, 14, 2, 4, 13, 6, 9, 5, 20

1, 15, 19, 14, 4, 16, 18, 13, 12, 11, 10, 9, 8, 3, 5, 17, 7, 2, 6, 20

1, 15, 19, 13, 5, 18, 17, 12, 14, 11, 10, 7, 9, 4, 3, 16, 8, 2, 6, 20

1, 15, 19, 13, 5, 18, 17, 11, 14, 12, 9, 7, 10, 4, 3, 16, 8, 2, 6, 20

1, 15, 18, 14, 5, 17, 19, 11, 12, 13, 8, 9, 10, 2, 4, 16, 7, 3, 6, 20

1, 15, 18, 14, 4, 16, 19, 13, 11, 12, 9, 10, 8, 2, 5, 17, 7, 3, 6, 20

1, 15, 18, 14, 4, 16, 19, 12, 11, 13, 8, 10, 9, 2, 5, 17, 7, 3, 6, 20

1, 15, 13, 12, 11, 19, 17, 5, 14, 18, 3, 7, 16, 4, 2, 10, 9, 8, 6, 20

1, 15, 13, 11, 12, 19, 16, 4, 14, 18, 3, 7, 17, 5, 2, 9, 10, 8, 6, 20

1, 15, 12, 14, 11, 17, 18, 5, 13, 19, 2, 8, 16, 3, 4, 10, 7, 9, 6, 20

1, 15, 12, 11, 13, 19, 16, 4, 14, 18, 3, 7, 17, 5, 2, 8, 10, 9, 6, 20

1, 15, 11, 14, 12, 17, 18, 5, 13, 19, 2, 8, 16, 3, 4, 9, 7, 10, 6, 20

1, 15, 11, 12, 13, 18, 16, 4, 14, 19, 2, 7, 17, 5, 3, 8, 9, 10, 6, 20

1, 13, 19, 16, 4, 14, 18, 15, 12, 11, 10, 9, 6, 3, 7, 17, 5, 2, 8, 20

1, 13, 18, 16, 4, 14, 19, 15, 11, 12, 9, 10, 6, 2, 7, 17, 5, 3, 8, 20

1, 13, 12, 11, 15, 19, 14, 4, 16, 18, 3, 5, 17, 7, 2, 6, 10, 9, 8, 20

1, 13, 11, 12, 15, 18, 14, 4, 16, 19, 2, 5, 17, 7, 3, 6, 9, 10, 8, 20

1, 12, 19, 16, 4, 14, 18, 15, 13, 11, 10, 8, 6, 3, 7, 17, 5, 2, 9, 20

1, 12, 17, 18, 5, 13, 19, 15, 11, 14, 7, 10, 6, 2, 8, 16, 3, 4, 9, 20

1, 12, 14, 11, 15, 19, 13, 5, 18, 17, 4, 3, 16, 8, 2, 6, 10, 7, 9, 20

1, 12, 11, 13, 15, 18, 14, 4, 16, 19, 2, 5, 17, 7, 3, 6, 8, 10, 9, 20

1, 11, 19, 17, 5, 14, 18, 15, 13, 12, 9, 8, 6, 3, 7, 16, 4, 2, 10, 20

1, 11, 17, 18, 5, 13, 19, 15, 12, 14, 7, 9, 6, 2, 8, 16, 3, 4, 10, 20

1, 11, 14, 12, 15, 19, 13, 5, 18, 17, 4, 3, 16, 8, 2, 6, 9, 7, 10, 20

1, 11, 12, 13, 15, 18, 14, 5, 17, 19, 2, 4, 16, 7, 3, 6, 8, 9, 10, 20

1, 8, 19, 18, 7, 12, 16, 17, 15, 11, 10, 6, 4, 5, 9, 14, 3, 2, 13, 20

1, 8, 19, 18, 7, 12, 15, 17, 16, 11, 10, 5, 4, 6, 9, 14, 3, 2, 13, 20

1, 8, 19, 18, 7, 12, 15, 17, 16, 10, 11, 5, 4, 6, 9, 14, 3, 2, 13, 20

1, 8, 18, 19, 7, 12, 15, 17, 16, 11, 10, 5, 4, 6, 9, 14, 2, 3, 13, 20

1, 8, 18, 19, 7, 11, 17, 16, 15, 12, 9, 6, 5, 4, 10, 14, 2, 3, 13, 20

1, 8, 18, 19, 7, 11, 16, 17, 15, 12, 9, 6, 4, 5, 10, 14, 2, 3, 13, 20

1, 8, 17, 19, 7, 11, 18, 16, 12, 15, 6, 9, 5, 3, 10, 14, 2, 4, 13, 20

1, 8, 15, 12, 16, 18, 11, 7, 19, 17, 4, 2, 14, 10, 3, 5, 9, 6, 13, 20

1, 8, 12, 15, 17, 16, 11, 7, 19, 18, 3, 2, 14, 10, 5, 4, 6, 9, 13, 20

1, 8, 12, 15, 16, 17, 11, 7, 19, 18, 3, 2, 14, 10, 4, 5, 6, 9, 13, 20

1, 8, 11, 16, 17, 15, 12, 7, 19, 18, 3, 2, 14, 9, 6, 4, 5, 10, 13, 20

1, 8, 11, 16, 17, 15, 12, 7, 18, 19, 2, 3, 14, 9, 6, 4, 5, 10, 13, 20

1, 8, 11, 15, 17, 16, 12, 7, 18, 19, 2, 3, 14, 9, 5, 4, 6, 10, 13, 20

1, 8, 10, 16, 17, 15, 12, 7, 18, 19, 2, 3, 14, 9, 6, 4, 5, 11, 13, 20

1, 7, 19, 18, 8, 12, 15, 17, 16, 11, 10, 5, 4, 6, 9, 13, 3, 2, 14, 20

1, 7, 19, 18, 8, 12, 15, 16, 17, 11, 10, 4, 5, 6, 9, 13, 3, 2, 14, 20

1, 7, 19, 18, 8, 11, 16, 17, 15, 12, 9, 6, 4, 5, 10, 13, 3, 2, 14, 20

1, 7, 19, 17, 8, 15, 12, 16, 18, 11, 10, 3, 5, 9, 6, 13, 4, 2, 14, 20

1, 7, 18, 19, 8, 11, 16, 17, 15, 12, 9, 6, 4, 5, 10, 13, 2, 3, 14, 20

1, 7, 18, 19, 8, 11, 15, 17, 16, 12, 9, 5, 4, 6, 10, 13, 2, 3, 14, 20

1, 7, 18, 19, 8, 10, 16, 17, 15, 12, 9, 6, 4, 5, 11, 13, 2, 3, 14, 20

1, 7, 12, 16, 17, 15, 11, 8, 19, 18, 3, 2, 13, 10, 6, 4, 5, 9, 14, 20

1, 7, 12, 15, 17, 16, 11, 8, 19, 18, 3, 2, 13, 10, 5, 4, 6, 9, 14, 20

1, 7, 12, 15, 17, 16, 11, 8, 18, 19, 2, 3, 13, 10, 5, 4, 6, 9, 14, 20

1, 7, 12, 15, 17, 16, 10, 8, 19, 18, 3, 2, 13, 11, 5, 4, 6, 9, 14, 20

1, 7, 11, 18, 16, 12, 15, 8, 17, 19, 2, 4, 13, 6, 9, 5, 3, 10, 14, 20

1, 7, 11, 17, 16, 15, 12, 8, 18, 19, 2, 3, 13, 9, 6, 5, 4, 10, 14, 20

1, 7, 11, 16, 17, 15, 12, 8, 18, 19, 2, 3, 13, 9, 6, 4, 5, 10, 14, 20

1, 5, 18, 17, 12, 14, 11, 15, 19, 13, 8, 2, 6, 10, 7, 9, 4, 3, 16, 20

1, 5, 18, 17, 11, 14, 12, 15, 19, 13, 8, 2, 6, 9, 7, 10, 4, 3, 16, 20

1, 5, 17, 19, 11, 12, 13, 15, 18, 14, 7, 3, 6, 8, 9, 10, 2, 4, 16, 20

1, 5, 14, 18, 15, 13, 12, 11, 19, 17, 4, 2, 10, 9, 8, 6, 3, 7, 16, 20

1, 5, 13, 19, 15, 12, 14, 11, 17, 18, 3, 4, 10, 7, 9, 6, 2, 8, 16, 20

1, 5, 13, 19, 15, 11, 14, 12, 17, 18, 3, 4, 9, 7, 10, 6, 2, 8, 16, 20

1, 4, 16, 19, 13, 11, 12, 15, 18, 14, 7, 3, 6, 9, 10, 8, 2, 5, 17, 20

1, 4, 16, 19, 12, 11, 13, 15, 18, 14, 7, 3, 6, 8, 10, 9, 2, 5, 17, 20

1, 4, 16, 18, 13, 12, 11, 15, 19, 14, 7, 2, 6, 10, 9, 8, 3, 5, 17, 20

1, 4, 14, 19, 15, 11, 12, 13, 18, 16, 5, 3, 8, 9, 10, 6, 2, 7, 17, 20

1, 4, 14, 18, 15, 13, 11, 12, 19, 16, 5, 2, 9, 10, 8, 6, 3, 7, 17, 20

1, 4, 14, 18, 15, 12, 11, 13, 19, 16, 5, 2, 8, 10, 9, 6, 3, 7, 17, 20



Of these 78 configurations four additionally have the property that were you to read their numbers as a d10 (11=>1, 15=>5, 20=> 10) their vertex sums would be [22, 22, 23, 23, 23, 23, 32, 32, 32, 32, 33, 33]:

1, 17, 16, 12, 7, 18, 19, 8, 11, 15, 6, 10, 13, 2, 3, 14, 9, 5, 4, 20

1, 8, 19, 18, 7, 12, 16, 17, 15, 11, 10, 6, 4, 5, 9, 14, 3, 2, 13, 20

1, 8, 15, 12, 16, 18, 11, 7, 19, 17, 4, 2, 14, 10, 3, 5, 9, 6, 13, 20

1, 7, 11, 18, 16, 12, 15, 8, 17, 19, 2, 4, 13, 6, 9, 5, 3, 10, 14, 20
