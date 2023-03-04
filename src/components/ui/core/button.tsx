import { forwardRef } from 'react';
import cn from 'clsx';
import type { ComponentPropsWithRef } from 'react';
import { Loading } from '../elements/loading';

type ButtonProps = ComponentPropsWithRef<'button'> & {
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  iconClassName?: string;
};

// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, type, loading, iconClassName, disabled, children, ...rest },
    ref
  ) => {
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    const isDisabled = loading || disabled;

    return (
      <button
        className={cn(
          'btn',
          loading &&
            'relative bg-purple-600 !text-transparent disabled:cursor-wait',
          className
        )}
        type={type ?? 'button'}
        disabled={isDisabled}
        ref={ref}
        {...rest}
      >
        {loading && (
          <Loading
            iconClassName={cn(iconClassName ?? 'h-5 w-5')}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white'
          />
        )}
        {children}
      </button>
    );
  }
);
