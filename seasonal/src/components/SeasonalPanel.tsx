import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PRODUCE = {
  "Apples": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  "Blackberries": [8, 9],
  "Blueberries": [7, 8, 9],
  "Cantaloupes": [8, 9],
  "Sweet Cherries": [6, 7],
  "Tart Cherries": [7],
  "Currants": [8],
  "Grapes": [8, 9, 10],
  "Peaches": [7, 8, 9],
  "Pears": [8, 9, 10],
  "Plums": [7, 8, 9],
  "Prunes": [8, 9],
  "Raspberries": [7, 9, 10],
  "Strawberries": [6, 7],
  "Watermelon": [9, 10],
  "Asparagus": [5, 6],
  "Beans": [9, 10, 11, 12],
  "Lima Beans": [9, 10],
  "Snap Beans": [7, 8, 9],
  "Beets": [6, 7, 8, 9, 10, 11],
  "Beet Greens": [5, 6, 7, 8, 9],
  "Broccoli": [6, 7, 8, 9, 10, 11],
  "Brussels Sprouts": [9, 10, 11],
  "Cabbage": [6, 7, 8, 9, 10, 11, 12],
  "Carrots": [7, 8, 9, 10, 11],
  "Cauliflower": [8, 9, 10, 11],
  "Celery": [8, 9, 10, 11],
  "Collard Greens": [7, 8, 9, 10, 11, 12],
  "Corn": [8, 9, 10, 11],
  "Cucumbers": [7, 8, 9, 10, 11],
  "Eggplant": [8, 9, 10, 11],
  "Garlic": [6, 7],
  "Herbs": [6, 7, 8, 9, 10],
  "Kale": [8, 9, 10, 11],
  "Leeks": [8, 9, 10],
  "Lettuce": [5, 6, 7, 8, 9, 10],
  "Mustard Greens": [6, 7, 8, 9, 10, 11],
  "Onions": [7, 8, 9, 10, 11],
  "Parsnips": [4, 5, 10, 11, 12],
  "Peas": [6, 7, 9, 10],
  "Peppers": [7, 8, 9, 10],
  "Potatoes": [7, 8, 9, 10],
  "Pumpkins": [9, 10],
  "Radishes": [5, 6, 7, 8, 9],
  "Rhubarb": [5, 6, 7],
  "Spinach": [5, 6, 7, 8, 9, 10],
  "Summer Squash": [6, 7, 8, 9, 10],
  "Winter Squash": [8, 9, 10, 11],
  "Swiss Chard": [6, 7, 8, 9, 10],
  "Tomatoes": [6, 7, 8, 9, 10],
  "Turnips": [8, 9, 10, 11],
  "Turnip Greens": [5, 6, 7, 8],
  "Zucchini": [6, 7, 8, 9, 10]
}

const MONTHS = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

export const SeasonalPanel = () => {
  const monthToProduceMap = new Map<number, string[]>();
  for (const [produce, months] of Object.entries(PRODUCE)) {
    for(const month of months) {
      if (monthToProduceMap.has(month)) {
        const produceListForMonth = monthToProduceMap.get(month)!;
        monthToProduceMap.set(month, [...produceListForMonth, produce]);
      } else {
        monthToProduceMap.set(month, [produce]);
      }
    }
  }

  const currentMonth = (new Date().getMonth()) + 1;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Card style={{ padding: '8px' }}>
        <Typography variant="h4">
          NYC in-season produce for {MONTHS[currentMonth]}
        </Typography>
      </Card>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {monthToProduceMap.get(currentMonth)?.map((produce) => {
          return (
            <div>
              <Card variant="outlined" style={{ width: '230px', margin: '16px' }}>
                {/* <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                /> */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {produce}
                  </Typography>
                </CardContent>
                <CardActions>
                  <a href={`https://www.allrecipes.com/search/results/?IngIncl=${produce}`} target="_blank">
                    <Button size="small">Find Recipes</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  );
}