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
  // click on order tab 
  await page.getByText('Orders', { exact: true }).click();
  // first case add lab order 
  await page.getByText('Order Entry').click();
  await page.getByLabel('select').nth(2).click();
  await page.getByRole('option', { name: 'Laboratory' }).locator('span').click();
  await page.getByPlaceholder('Add new laboratory using the investigation code or name').fill('cbc');
  // console.debug(page.locator('#ClassificationGridId td .ClassificationItem'));
  //  (await page.waitForSelector('#ClassificationGridId td .ClassificationItem')).textContent();
  //  await page.waitForLoadState("domcontentloaded");
  const ddl = await page.locator('#ClassificationGridId td .ClassificationItem');
  await ddl.hover();
  await ddl.click();
  await page.getByPlaceholder('Requesting Physician *').click();
  await page.getByPlaceholder('Requesting Physician *').fill('ahmed');
  //  await expect (page.locator('[class="k-list k-reset"]')).toBeEnabled();
  await page.getByRole('option', { name: 'Abdel Ghafar Ahmed Selim' }).click();
  await page.getByRole('button', { name: 'Order', exact: true }).click();
  const Mytxt=page.getByText('Ordered Successfully!');
console.debug(Mytxt);
expect (Mytxt).toHaveText('Ordered Successfully!');

});
//   //second case  edit medical imaging 
//   await page.locator('.col > .k-widget > .k-dropdown-wrap > .k-select > .k-icon').first().click();
//   await page.getByRole('option', { name: 'Medical Imaging' }).locator('span').click();
//   await page.getByPlaceholder('Add new Medical Imaging using the investigation code or name').fill('mri');
//   await page.getByRole('gridcell', { name: 'MRI ABDOMEN once' }).hover();
//   await page.getByRole('gridcell', { name: 'MRI ABDOMEN once' }).click();
//   await page.locator('#NewOrderList').getByRole('img').nth(1).click();
//   await page.getByText('Routine').click();
//   await page.locator('#editLabRadProcedure___BV_modal_body_').getByRole('textbox').first().dblclick();
//   await page.locator('#editLabRadProcedure___BV_modal_body_').getByRole('textbox').first().click();
//   await page.locator('#editLabRadProcedure___BV_modal_body_').getByRole('textbox').first().click();
//   await page.locator('#editLabRadProcedure___BV_modal_body_').getByRole('textbox').first().fill('2');
//   await page.locator('#ReceptionNotes').click();
//   await page.locator('#ReceptionNotes').fill('rec');
//   await page.locator('#Notes').click();
//   await page.locator('#Notes').fill('notessss');
//   await page.getByRole('button', { name: 'Update' }).click();
//   await page.getByPlaceholder('Requesting Physician *').click();
//   await page.getByPlaceholder('Requesting Physician *').fill('ahmed');
//   // await page.pause();
//   await page.getByRole('option', { name: 'Abdel Ghafar Ahmed Selim' }).click();
//   await page.getByRole('button', { name: 'Order', exact: true }).click();

// //  third case add medication with taper dose
//   await page.locator('.col > .k-widget > .k-dropdown-wrap > .k-select > .k-icon').first().click();
//   await page.getByRole('option', { name: 'Medication' }).locator('span').click();
//   // await page.getByText('Medication', { exact: true }).click();
//   await page.getByPlaceholder('Add new Medications using the medication code or name').click();
//   await page.getByPlaceholder('Add new Medications using the medication code or name').fill('cetal');
//   await page.getByText('200477 - CETAL 500 MG 20 TAB').hover();
//   await page.getByText('200477 - CETAL 500 MG 20 TAB').click();
//   await page.getByText('Administration NotesBefore eatingAfter eatingBefore breakfastWhen it is neededAf').click();
//   await page.getByRole('option', { name: 'Before eating' }).click();
//   await page.getByRole('button', { name: 'Advanced Options' }).click();
//   await page.getByPlaceholder(' Patient Notes').click();
//   await page.getByPlaceholder(' Patient Notes').fill('patient');
//   await page.getByPlaceholder(' Dispensing Notes').click();
//   await page.getByPlaceholder(' Dispensing Notes').fill('dispensing');
//   await page.getByPlaceholder(' Receptionist Notes').click();
//   await page.getByPlaceholder(' Receptionist Notes').fill('rec');
//   await page.getByRole('button', { name: ' Taper Dose' }).click();
//   await page.getByPlaceholder('Dose', { exact: true }).click();
//   await page.getByPlaceholder('Dose', { exact: true }).fill('0.5');
//   await page.getByPlaceholder('Every', { exact: true }).click();
//   await page.getByPlaceholder('Every', { exact: true }).fill('12');
//   await page.getByPlaceholder('For', { exact: true }).fill('1');
//   await page.getByPlaceholder('For', { exact: true }).click();
//   await page.getByRole('button', { name: ' Save' }).click();
//   await page.getByRole('button', { name: 'Advanced Options' }).click();
//   await page.getByRole('button', { name: 'Add to Orderlist' }).click();
//   await page.getByPlaceholder('Requesting Physician *').click();
//   await page.getByPlaceholder('Requesting Physician *').fill('ahmed');
//   // await page.pause();
//   await page.getByRole('option', { name: 'Abdel Ghafar Ahmed Selim' }).click();
//   await page.getByRole('button', { name: 'Order', exact: true }).click();
// // fourth case  add procedure and delete it  from order list 
//   await page.getByText('Orders', { exact: true }).click();
//   await page.getByText('Order Entry').click();
//   await page.locator('.col > .k-widget > .k-dropdown-wrap > .k-select > .k-icon').first().click();
//   await page.getByRole('option', { name: 'Procedure' }).locator('span').click();
//   await page.getByPlaceholder('Add new Procedures using the procedure code or name').click();
//   await page.getByPlaceholder('Add new Procedures using the procedure code or name').fill('PROC');
//   await page.getByRole('gridcell', { name: 'AMBULANCE FOR RADIOLOGICAL PROCEDURES(COMPANY) once' }).locator('div').click();
//   await page.locator('#NewOrderList').getByRole('img').nth(2).click();
//   await page.getByRole('button', { name: 'Yes' }).click();
//   await page.pause();


