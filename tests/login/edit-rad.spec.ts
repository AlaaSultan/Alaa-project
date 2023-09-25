import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('http://dev-testing.andalusiagroup.net:5004/');
  await page.waitForURL('http://dev-testing.andalusiagroup.net:5004/');
  await page.locator('[id="userName"]').click();
  await page.locator('[id="userName"]').type("Alaa emp");
  await page.locator('#password').click();
  const passwordfield = await page.locator('#password');
  await passwordfield.fill("4415");
  //  to  have the value before click on login 
  await expect(passwordfield).toHaveValue("4415");
  // login button 
  await page.locator('[class="btn btn-block submit-btn"]').click();
  // menu icon 
  await page.locator('[class="pr-2 start-nav pl-1"]').click();
  // portal 
  await page.locator('[class="d-inline-block mt-2 mb-1 ml-3 mr-3 mb-1"]').click();
  // click on search field and  fill the patient code 
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').fill('00149588ALX');
  // click on search icon 
  await page.locator('[class="fa fa-search search-icon"]').click();
  //  select patient
  await page.getByText('33 Y').click();
  // capture patient
  await expect(page.locator('button:has-text("Capture Patient")')).toBeVisible();
  await page.getByRole('button', { name: 'Capture Patient' }).click();
  await page.getByText('Orders', { exact: true }).click();
  await page.getByText('Order Entry').click();
  await page.locator('.col > .k-widget > .k-dropdown-wrap > .k-select > .k-icon').first().click();
  await page.getByRole('option', { name: 'Medical Imaging' }).locator('span').click();
  await page.getByPlaceholder('Add new Medical Imaging using the investigation code or name').fill('mri');
  await page.getByRole('gridcell', { name: 'MRI ABDOMEN once' }).hover();
  await page.getByRole('gridcell', { name: 'MRI ABDOMEN once' }).click();
  await page.locator('#NewOrderList').getByRole('img').nth(1).click();
  await page.getByText('Routine').click();
  await page.locator('#editLabRadProcedure___BV_modal_body_').getByRole('textbox').first().dblclick();
  await page.locator('#editLabRadProcedure___BV_modal_body_').getByRole('textbox').first().click();
  await page.locator('#editLabRadProcedure___BV_modal_body_').getByRole('textbox').first().click();
  await page.locator('#editLabRadProcedure___BV_modal_body_').getByRole('textbox').first().fill('2');
  await page.locator('#ReceptionNotes').click();
  await page.locator('#ReceptionNotes').fill('rec');
  await page.locator('#Notes').click();
  await page.locator('#Notes').fill('notessss');
  await page.getByRole('button', { name: 'Update' }).click();
//   const update=page.getByText('Updated Successfully!');
//   console.debug(update);
//   expect (update).toHaveText('Updated Successfully!');
  await page.getByPlaceholder('Requesting Physician *').click();
  await page.getByPlaceholder('Requesting Physician *').fill('ahmed');
  // await page.pause();
  await page.getByRole('option', { name: 'Abdel Ghafar Ahmed Selim' }).click();
  await page.getByRole('button', { name: 'Order', exact: true }).click();
  const order=page.getByText('Ordered Successfully!');
  console.debug(order);
  expect (order).toHaveText('Ordered Successfully!');
  });