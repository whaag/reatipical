type WelcomeProps =  {
  userType: string,
  actionableItems?: number,
  isLoggedIn: boolean,
}

export const Welcome = (props: WelcomeProps) => {
  const { actionableItems = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn         
          ? `Welcome ${props.userType}. You have ${actionableItems} actionable items`
          : 'You need to be logged in to do the thing'}    
      </h2>
    </div>
  );
};