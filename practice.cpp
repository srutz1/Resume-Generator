#include<iostream>
using namespace std;
int main()
{
    int a[4][4]={{1,2,3,4},{5,6,7,8},{9,10,11,12},{13,14,15,16}};
    int i,j;
    for( i=0;i<4;i++)
    {

        for(j=0;j<i;j++)
        {
            if(i+j<=i)
                cout<<a[i][j]<<endl;

        }if(i+j<=j)
            cout<<a[j][i];

    }
    return 0;
}
