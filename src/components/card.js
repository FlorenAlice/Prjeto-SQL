import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SqlCodeCard = ({ enunciado, titulo, codigo }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{titulo}</Typography>
        <SyntaxHighlighter language="sql" style={darcula}>
          {codigo}
        </SyntaxHighlighter>
      </CardContent>
    </Card>
  );
};

export default SqlCodeCard;