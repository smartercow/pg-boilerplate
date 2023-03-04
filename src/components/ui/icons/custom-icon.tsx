import cn from "clsx";

type IconName = keyof typeof Icons;

type IconProps = {
  className?: string;
};

type CustomIconProps = IconProps & {
  iconName: IconName;
};

const Icons = {
  StarIcon,
  AppleIcon,
  GoogleIcon,
  SquaresIcon,
  StarSecIcon,
  SpinnerIcon,
  TwitterIcon,
  FeatherIcon,
  TriangleIcon,
};

export function CustomIcon({
  iconName,
  className,
}: CustomIconProps): JSX.Element {
  const Icon = Icons[iconName];

  return <Icon className={className ?? "h-6 w-6"} />;
}

function StarIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={cn("fill-current", className)}
      viewBox="0 0 512 512"
      aria-hidden="true"
    >
      <g>
        <path
          fill="currentColor"
          d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480Z"
        />
      </g>
    </svg>
  );
}

function StarSecIcon({ className }: IconProps): JSX.Element {
  return (
    <svg className={cn("fill-current", className)} viewBox="0 0 8 8">
      <g>
        <path
          d="M6.4636 7.94155C6.54393 7.88563 6.59749 7.77377 6.57071 7.66192L6.14226 5.11727L7.90962 3.32762C7.98996 3.24373 8.01674 3.13188 7.98996 3.04799C7.96318 2.93614 7.88284 2.88021 7.77573 2.85225L5.33891 2.48873L4.241 0.167779C4.18745 0.0838897 4.10711 0 4 0C3.89289 0 3.81255 0.0559265 3.759 0.167779L2.66109 2.48873L0.224268 2.85225C0.117155 2.85225 0.03682 2.93614 0.0100418 3.04799C-0.0167364 3.15984 0.0100421 3.2717 0.0903768 3.32762L1.85774 5.11727L1.42929 7.66192C1.40251 7.77377 1.45607 7.88563 1.5364 7.94155C1.61674 7.99748 1.72385 8.02544 1.83096 7.96951L4.02678 6.7671L6.22259 7.96951C6.24937 7.99748 6.30293 7.99748 6.35648 7.99748C6.35648 7.99748 6.41004 7.99748 6.4636 7.94155Z"
          fill="#b9c4df"
        ></path>
      </g>
    </svg>
  );
}

function SquaresIcon({ className }: IconProps): JSX.Element {
  return (
    <svg className={cn("fill-current", className)} viewBox="0 0 24 24">
      <g>
        <rect
          width="112"
          height="112"
          x="48"
          y="48"
          fill="fill-current"
          rx="8"
          ry="8"
        />
        <rect
          width="112"
          height="112"
          x="200"
          y="48"
          fill="fill-current"
          rx="8"
          ry="8"
        />
        <rect
          width="112"
          height="112"
          x="352"
          y="48"
          fill="fill-current"
          rx="8"
          ry="8"
        />
        <rect
          width="112"
          height="112"
          x="48"
          y="200"
          fill="fill-current"
          rx="8"
          ry="8"
        />
        <rect
          width="112"
          height="112"
          x="200"
          y="200"
          fill="fill-current"
          rx="8"
          ry="8"
        />
        <rect
          width="112"
          height="112"
          x="352"
          y="200"
          fill="fill-current"
          rx="8"
          ry="8"
        />
        <rect
          width="112"
          height="112"
          x="48"
          y="352"
          fill="fill-current"
          rx="8"
          ry="8"
        />
        <rect
          width="112"
          height="112"
          x="200"
          y="352"
          fill="fill-current"
          rx="8"
          ry="8"
        />
        <rect
          width="112"
          height="112"
          x="352"
          y="352"
          fill="fill-current"
          rx="8"
          ry="8"
        />
      </g>
    </svg>
  );
}

function TwitterIcon({ className }: IconProps): JSX.Element {
  return (
    <svg className={cn("fill-current", className)} viewBox="0 0 24 24">
      <g>
        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
      </g>
    </svg>
  );
}

function FeatherIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={cn("fill-current", className)}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <g>
        <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z" />
      </g>
    </svg>
  );
}

function GoogleIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <g>
        <path
          fill="#EA4335"
          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
        />
        <path
          fill="#4285F4"
          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
        />
        <path
          fill="#FBBC05"
          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
        />
        <path
          fill="#34A853"
          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
        />
        <path fill="none" d="M0 0h48v48H0z" />
      </g>
    </svg>
  );
}

function AppleIcon({ className }: IconProps): JSX.Element {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <g>
        <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
      </g>
    </svg>
  );
}

function TriangleIcon({ className }: IconProps): JSX.Element {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <g>
        <path d="M12.538 6.478c-.14-.146-.335-.228-.538-.228s-.396.082-.538.228l-9.252 9.53c-.21.217-.27.538-.152.815.117.277.39.458.69.458h18.5c.302 0 .573-.18.69-.457.118-.277.058-.598-.152-.814l-9.248-9.532z" />
      </g>
    </svg>
  );
}

function SpinnerIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={cn("animate-spin", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}
