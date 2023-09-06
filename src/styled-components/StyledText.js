import React from 'react';
import { StyleSheet, Text } from 'react-native';
import theme from '../theme';

const StyledText = ({ title, subTitle, children, ...rest }) => {
  const textStyles = [styles.normal, title && styles.title, subTitle && styles.subTitle];

  return (
    <Text style={textStyles} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    color: theme.color.primary.main,
    fontSize: theme.font.primary.size,
    fontWeight: theme.font.primary.weight,
  },
  subTitle: {
    color: theme.color.secondary.main,
    fontSize: theme.font.secondary.size,
    fontWeight: theme.font.secondary.weight,
  },
  normal: {
    color: theme.color.common.black,
    fontSize: theme.font.common.size,
  },
});

export default StyledText;
