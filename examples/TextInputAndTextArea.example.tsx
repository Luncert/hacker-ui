import React, { useState } from 'react';
import {
  createStyles,
  PropsFromStyles,
  TextInput,
  TextArea,
  FormControl,
  Checkbox,
  Label,
  Select,
  HelperText,
} from 'hacker-ui';

const useStyles = createStyles(({ css, theme }) => ({
  root: css`
    display: flex;
  `,
  title: css`
    ${theme.fonts.h5};
    margin-bottom: ${theme.space(1)};
  `,
  controls: css`
    margin: ${theme.gap(1)} 0;
    flex: 0 0 auto;
    overflow: hidden;
    width: ${theme.block(2)};
    display: flex;
    flex-direction: column;
  `,
  formControlVariant: css`
    margin-bottom: ${theme.space(1)};
  `,
  checkboxFormControl: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    & > *:not(:last-child) {
      margin-right: ${theme.space(1)};
    }
  `,
  contentContainer: css`
    flex: 1 1 auto;
    overflow: hidden;
    display: flex;
  `,
  content: css`
    width: ${theme.block(4)};
    margin: ${theme.gap(1)} auto;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.surface};
    padding: ${theme.space(1)};
    box-shadow: ${theme.shadows.standard};
    & > *:not(:last-child) {
      margin-bottom: ${theme.gap(1)};
    }
  `,
  textArea: css`
    resize: vertical;
  `,
}));

interface Props extends PropsFromStyles<typeof useStyles> {}

function TextInputAndTextAreaExample(props: Props) {
  const { Root, styles } = useStyles(props);

  const [hasError, setHasError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [variant, setVariant] = useState<'filled' | 'outlined'>('outlined');

  return (
    <Root>
      <div className={styles.controls}>
        <h3 className={styles.title}>Form Control Options</h3>
        <FormControl className={styles.formControlVariant}>
          <Label>Variant</Label>
          <Select
            value={variant}
            onChange={e =>
              setVariant(e.currentTarget.value as 'filled' | 'outlined')
            }
          >
            <option value="outlined">Outlined</option>
            <option value="filled">Filled</option>
          </Select>
        </FormControl>

        <h3 className={styles.title}>States</h3>
        <FormControl className={styles.checkboxFormControl}>
          <Checkbox
            checked={disabled}
            onChange={() => setDisabled(!disabled)}
          />
          <Label>Disabled</Label>
        </FormControl>

        <FormControl className={styles.checkboxFormControl}>
          <Checkbox
            checked={hasError}
            onChange={() => setHasError(!hasError)}
          />
          <Label>Has Error</Label>
        </FormControl>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <FormControl disabled={disabled} hasError={hasError}>
            <Label>Text Input</Label>
            <TextInput variant={variant} placeholder="Only one line of text" />
            <HelperText>Helper text</HelperText>
          </FormControl>

          <FormControl disabled={disabled} hasError={hasError}>
            <Label>Text Area</Label>
            <TextArea
              className={styles.textArea}
              variant={variant}
              placeholder="This is multiline and can be resized."
              rows={5}
            />
            <HelperText>Helper text</HelperText>
          </FormControl>
        </div>
      </div>
    </Root>
  );
}

export default TextInputAndTextAreaExample;
